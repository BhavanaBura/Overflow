import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Bot, FileText, History, Sparkles } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="border-b border-slate-200/60 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">AgentForge</h1>
                <p className="text-xs text-slate-500">Multi-Agent Requirement Processor</p>
              </div>
            </div>
            
            <nav className="flex items-center gap-1">
              <Link 
                to={createPageUrl("Processor")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium ${
                  location.pathname === createPageUrl("Processor")
                    ? "bg-blue-100 text-blue-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Processor
              </Link>
              <Link 
                to={createPageUrl("History")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 text-sm font-medium ${
                  location.pathname === createPageUrl("History")
                    ? "bg-blue-100 text-blue-700 shadow-sm"
                    : "text-slate-600 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                <History className="w-4 h-4" />
                History
              </Link>
            </nav>
          </div>
        </div>
      </div>
      
      <main className="max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
      
      <footer className="border-t border-slate-200 bg-white/60 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <Bot className="w-4 h-4" />
            <p className="text-sm">Powered by intelligent agent collaboration</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
