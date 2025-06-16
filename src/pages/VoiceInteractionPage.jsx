import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Send, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { API_CONFIG } from '@/config/api';
import { GoogleGenAI } from "@google/genai";

function VoiceInteractionPage() {
  const [isListening, setIsListening] = useState(false);
  const [conversation, setConversation] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('google');
  const [selectedModel, setSelectedModel] = useState('gemini-pro');
  const [recognitionError, setRecognitionError] = useState('');
  const messagesEndRef = useRef(null);
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition({
    commands: [],
    continuous: true,
    language: 'zh-CN',
    interimResults: true
  });

  // 初始化 Google Gemini API
  const genAI = new GoogleGenAI({apiKey: API_CONFIG.GEMINI_API_KEY});

  useEffect(() => {
    if (transcript) {
      setUserInput(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleListening = async () => {
    try {
      if (!isListening) {
        // 请求麦克风权限
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(track => track.stop()); // 停止流，我们只需要权限
        
        resetTranscript();
        setIsListening(true);
        setRecognitionError('');
        await SpeechRecognition.startListening({ 
          continuous: true,
          language: 'zh-CN'
        });
      } else {
        setIsListening(false);
        await SpeechRecognition.stopListening();
      }
    } catch (error) {
      console.error('麦克风访问错误:', error);
      setRecognitionError('无法访问麦克风，请确保已授予麦克风权限。');
      setIsListening(false);
    }
  };

  const handleModelChange = (value) => {
    setSelectedModel(value);
  };

  const handleProviderChange = (value) => {
    setSelectedProvider(value);
    // 设置默认模型
    setSelectedModel(value === 'google' 
      ? API_CONFIG.MODELS.GOOGLE[0].id 
      : API_CONFIG.MODELS.OPENAI[0].id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // 添加用户消息
    const userMessage = { text: userInput, sender: 'user' };
    setConversation(prev => [...prev, userMessage]);
    
    // 清空输入
    setUserInput('');
    resetTranscript();
    setIsProcessing(true);
    
    try {
      let aiResponse;
      
      if (selectedProvider === 'google') {
        const result = await genAI.models.generateContent({
          model: 'gemini-2.0-flash',
          contents: userInput
        });
        const response =  result.text;
        aiResponse = {
          text: response,
          sender: 'ai'
        };
      } else {
        // OpenAI API 调用
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_CONFIG.OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: selectedModel,
            messages: [
              {
                role: 'system',
                content: '你是一个专业的能源管理助手，请用中文回答用户的问题。'
              },
              {
                role: 'user',
                content: userInput
              }
            ],
            temperature: 0.7,
            max_tokens: 1000,
            top_p: 0.95,
            frequency_penalty: 0,
            presence_penalty: 0,
            stream: false
          })
        });
        
        if (!response.ok) {
          if (response.status === 429) {
            throw new Error('请求过于频繁，请稍后再试');
          }
          const errorData = await response.json();
          throw new Error(`OpenAI API 错误: ${errorData.error?.message || '未知错误'}`);
        }
        
        const data = await response.json();
        aiResponse = {
          text: data.choices[0].message.content,
          sender: 'ai'
        };
      }
      
      setConversation(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('处理请求时出错:', error);
      setConversation(prev => [...prev, {
        text: '抱歉，处理您的请求时出现问题。请稍后再试。',
        sender: 'ai'
      }]);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
        <div className="container mx-auto px-4 py-8 flex-1 flex flex-col justify-center items-center">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">浏览器不支持</h2>
            <p className="text-gray-600 mb-6">
              您的浏览器不支持语音识别功能。请使用最新版本的Chrome、Edge或Safari浏览器。
            </p>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="mr-2 h-4 w-4" /> 返回首页
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!isMicrophoneAvailable) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
        <div className="container mx-auto px-4 py-8 flex-1 flex flex-col justify-center items-center">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">麦克风不可用</h2>
            <p className="text-gray-600 mb-6">
              无法访问麦克风。请确保您的设备有麦克风，并且已授予浏览器访问权限。
            </p>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="mr-2 h-4 w-4" /> 返回首页
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 w-8 h-8 rounded-lg"></div>
            <span className="text-xl font-bold text-blue-800">语音助手</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Select value={selectedProvider} onValueChange={handleProviderChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="选择提供商" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google Gemini</SelectItem>
                <SelectItem value="openai">OpenAI</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedModel} onValueChange={handleModelChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="选择模型" />
              </SelectTrigger>
              <SelectContent>
                {selectedProvider === 'google' 
                  ? API_CONFIG.MODELS.GOOGLE.map(model => (
                      <SelectItem key={model.id} value={model.id}>
                        {model.name}
                      </SelectItem>
                    ))
                  : API_CONFIG.MODELS.OPENAI.map(model => (
                      <SelectItem key={model.id} value={model.id}>
                        {model.name}
                      </SelectItem>
                    ))
                }
              </SelectContent>
            </Select>

            <Button 
              variant={isListening ? "destructive" : "outline"} 
              className="mr-3"
              onClick={toggleListening}
            >
              {isListening ? (
                <MicOff className="h-5 w-5 mr-2" />
              ) : (
                <Mic className="h-5 w-5 mr-2" />
              )}
              {isListening ? '停止录音' : '开始录音'}
            </Button>
            
            <Link to="/">
              <Button variant="ghost">
                <ArrowLeft className="mr-2 h-5 w-5" /> 返回首页
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* 对话区域 */}
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col">
        <div className="bg-white rounded-xl shadow-lg flex-1 flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-gray-900">能源管理语音助手</h1>
            <p className="text-sm text-gray-500">
              请说出您的能源管理问题，例如："如何降低工厂能耗？" 或 "分析上月的用电情况"
            </p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[60vh]">
            {conversation.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="bg-blue-100 rounded-full p-4 mb-4">
                  <Mic className="h-12 w-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">开始语音对话</h3>
                <p className="text-gray-600 max-w-md">
                  点击下方麦克风按钮开始录音，或直接在输入框中输入您的问题。
                  我们的AI助手将为您提供专业的能源管理建议。
                </p>
              </div>
            ) : (
              conversation.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-none' 
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
            {isProcessing && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-bl-none px-4 py-3 flex items-center">
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                  正在思考中...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* 输入区域 */}
          <form onSubmit={handleSubmit} className="border-t p-4">
            <div className="flex">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder={listening ? "正在聆听..." : "输入您的问题或点击麦克风说话"}
                  className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isProcessing}
                />
                {listening && (
                  <div className="absolute right-3 top-3 flex">
                    <span className="flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                )}
              </div>
              <Button 
                type="submit" 
                className="ml-3 bg-blue-600 hover:bg-blue-700"
                disabled={isProcessing || !userInput.trim()}
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            {recognitionError && (
              <p className="text-red-500 text-sm mt-2">{recognitionError}</p>
            )}
            <p className="text-xs text-gray-500 mt-2">
              提示：点击麦克风按钮开始语音输入，系统会自动将您的语音转换为文字
            </p>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-800 mb-2">示例问题</h3>
            <ul className="text-sm space-y-1">
              <li>• 如何降低工厂能耗？</li>
              <li>• 分析上月的用电情况</li>
              <li>• 推荐节能设备</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="font-semibold text-green-800 mb-2">支持功能</h3>
            <ul className="text-sm space-y-1">
              <li>• 能耗数据分析</li>
              <li>• 节能建议</li>
              <li>• 异常检测</li>
            </ul>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="font-semibold text-purple-800 mb-2">使用提示</h3>
            <ul className="text-sm space-y-1">
              <li>• 在安静环境下使用语音</li>
              <li>• 一次提出一个问题</li>
              <li>• 问题越具体，回答越精准</li>
            </ul>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            基于Live API Web Console技术构建 | xx语音助手
          </p>
          <p className="text-gray-500 text-xs mt-2">
            © 2023 xx科技有限公司. 保留所有权利
          </p>
        </div>
      </footer>
    </div>
  );
}

export default VoiceInteractionPage;
