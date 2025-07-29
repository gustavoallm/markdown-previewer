import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useHostTheme } from "@/hooks/useHostTheme";
import { MarkdownExample } from "@/lib/utils";
import "github-markdown-css/github-markdown-light.css";
import "github-markdown-css/github-markdown.css";
import { Code, FileText, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";

function App() {
  const [markdown, setMarkdown] = useState(MarkdownExample);
  const theme = useHostTheme();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme
    );
  }, [theme]);

  return (
    <div className="min-h-screen bg-muted text-primary flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl px-2 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between mb-2 gap-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary">Markdown Previewer</h1>
          </div>
          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 px-2 py-1 text-xs"
            >
              <FileText className="w-3 h-3 mr-1" />
              Markdown Input
            </Badge>
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 px-2 py-1 text-xs"
            >
              <Code className="w-3 h-3 mr-1" />
              Markdown Output
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mb-2 text-center md:text-left">
          Preview your Markdown with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Editor */}
          <div className="h-[calc(100vh-12rem)]">
            <div className="bg-card rounded-lg shadow-lg h-full flex flex-col">
              <div className="p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-primary">Editor</h2>
              </div>
              <textarea
                className="flex-1 p-4 resize-none focus:outline-none font-mono text-sm bg-card text-primary"
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
                spellCheck={false}
              />
              <div className="p-4 border-t border-border">
                <Button onClick={() => setMarkdown("")} className="w-full">
                  Limpar Editor
                </Button>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="h-[calc(100vh-12rem)]">
            <div className="bg-card rounded-lg shadow-lg h-full flex flex-col">
              <div className="p-4 border-b border-border">
                <h2 className="text-lg font-semibold text-primary">Preview</h2>
              </div>
              <div className="flex-1 overflow-auto p-4">
                <div
                  className={`markdown-body p-4 rounded-md ${
                    theme === "dark" ? "markdown-dark" : "markdown-light"
                  }`}
                >
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                    {markdown}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
