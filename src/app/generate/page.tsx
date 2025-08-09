"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { 
  Sparkles, 
  Zap, 
  Copy, 
  Download, 
  Share2, 
  Settings,
  Brain,
  PenTool,
  MessageSquare,
  FileText,
  Hash,
  Globe
} from "lucide-react"

const contentTypes = [
  { id: "blog", name: "Blog Post", icon: FileText, description: "Long-form articles and blog posts" },
  { id: "social", name: "Social Media", icon: Hash, description: "Posts for social media platforms" },
  { id: "email", name: "Email", icon: MessageSquare, description: "Email newsletters and campaigns" },
  { id: "ad", name: "Ad Copy", icon: PenTool, description: "Advertising and marketing copy" },
  { id: "seo", name: "SEO Content", icon: Globe, description: "SEO-optimized content" },
]

const tones = [
  "Professional",
  "Casual", 
  "Friendly",
  "Authoritative",
  "Conversational",
  "Humorous",
  "Formal"
]

export default function GeneratePage() {
  const [contentType, setContentType] = useState("")
  const [tone, setTone] = useState("")
  const [prompt, setPrompt] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = async () => {
    if (!contentType || !tone || !prompt) return
    
    setIsGenerating(true)
    
    // Simulate AI generation
    setTimeout(() => {
      const mockContent = `# ${prompt}

This is a professionally crafted ${contentType} piece written in a ${tone.toLowerCase()} tone. 

## Key Points

- **Engaging Introduction**: Captures attention immediately
- **Valuable Content**: Provides real value to readers
- **Clear Structure**: Easy to follow and understand
- **Call to Action**: Encourages reader engagement

## Main Content

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

### Subsection 1

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

### Subsection 2

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.

## Conclusion

This content demonstrates the power of AI-assisted writing while maintaining human-like quality and engagement.`
      
      setGeneratedContent(mockContent)
      setIsGenerating(false)
    }, 2000)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">ContentAI Pro</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="gradient" size="sm">
              <Brain className="mr-2 h-4 w-4" />
              Upgrade
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Content Generator
                </CardTitle>
                <CardDescription>
                  Create amazing content with AI in seconds
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Content Type */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Content Type</label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          <div className="flex items-center">
                            <type.icon className="mr-2 h-4 w-4" />
                            {type.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Tone */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Tone</label>
                  <Select value={tone} onValueChange={setTone}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select tone" />
                    </SelectTrigger>
                    <SelectContent>
                      {tones.map((toneOption) => (
                        <SelectItem key={toneOption} value={toneOption}>
                          {toneOption}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Prompt */}
                <div>
                  <label className="text-sm font-medium mb-2 block">What would you like to create?</label>
                  <Textarea
                    placeholder="Describe the content you want to generate. Be specific about the topic, length, and any key points you'd like to include..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>

                <Button 
                  onClick={handleGenerate} 
                  disabled={!contentType || !tone || !prompt || isGenerating}
                  className="w-full"
                  variant="gradient"
                >
                  {isGenerating ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap className="mr-2 h-4 w-4" />
                      Generate Content
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Quick Templates */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Templates</CardTitle>
                <CardDescription>
                  Start with a pre-built template
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Blog Post Introduction",
                    "Social Media Post",
                    "Email Newsletter",
                    "Product Description"
                  ].map((template) => (
                    <Button
                      key={template}
                      variant="outline"
                      size="sm"
                      className="justify-start"
                      onClick={() => setPrompt(template)}
                    >
                      {template}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Output Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Generated Content</CardTitle>
                  {generatedContent && (
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={handleCopy}>
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {generatedContent ? (
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">
                      {generatedContent}
                    </pre>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Sparkles className="mx-auto h-12 w-12 mb-4 opacity-50" />
                    <p>Your generated content will appear here</p>
                    <p className="text-sm">Fill in the form and click "Generate Content" to get started</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Usage Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Usage This Month</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">47</p>
                    <p className="text-sm text-gray-600">Content pieces generated</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">12</p>
                    <p className="text-sm text-gray-600">Days remaining</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Usage</span>
                    <span>47/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '47%' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}