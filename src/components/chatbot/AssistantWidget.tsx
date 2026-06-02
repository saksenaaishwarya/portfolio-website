'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Bot, MessageCircle, Send, Sparkles, X } from 'lucide-react';

import {
  greeting,
  suggestedQuestions,
} from '@/data/chatbot-knowledge';
import { matchAnswer } from '@/components/chatbot/match';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Message {
  role: 'bot' | 'user';
  text: string;
}

export function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: greeting },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, thinking, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setThinking(true);

    // Small delay to feel conversational.
    window.setTimeout(() => {
      const answer = matchAnswer(trimmed);
      setMessages((prev) => [...prev, { role: 'bot', text: answer }]);
      setThinking(false);
    }, 550);
  };

  return (
    <>
      {/* Launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close assistant' : 'Open AI assistant'}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-gradient text-white shadow-xl shadow-primary/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && (
          <span className="absolute right-0 top-0 flex h-3.5 w-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-3.5 w-3.5 rounded-full bg-accent" />
          </span>
        )}
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-5 z-50 flex h-[32rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            role="dialog"
            aria-label="Portfolio assistant"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10 p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-gradient text-white">
                <Bot className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold leading-none">
                  Portfolio Assistant
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Ask me about Aishwarya
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    'flex',
                    message.role === 'user' ? 'justify-end' : 'justify-start',
                  )}
                >
                  <div
                    className={cn(
                      'max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm',
                      message.role === 'user'
                        ? 'rounded-br-sm bg-brand-gradient text-white'
                        : 'rounded-bl-sm bg-muted text-foreground',
                    )}
                  >
                    {message.text}
                  </div>
                </div>
              ))}

              {thinking && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm bg-muted px-4 py-3">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground"
                        style={{ animationDelay: `${dot * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {messages.length <= 1 && (
                <div className="space-y-2 pt-2">
                  <p className="flex items-center gap-1 text-xs font-medium text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5 text-accent" /> Try asking
                  </p>
                  {suggestedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => send(question)}
                      className="block w-full rounded-xl border border-border px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:border-accent/40 hover:bg-muted hover:text-foreground"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                aria-label="Ask the assistant a question"
                className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <Button
                type="submit"
                size="icon"
                className="h-10 w-10 shrink-0"
                aria-label="Send message"
                disabled={!input.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
