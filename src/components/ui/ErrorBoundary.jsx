import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("CRITICAL_SYSTEM_FAILURE:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center p-8 font-mono text-red-600">
          <div className="max-w-xl w-full border border-red-600/30 p-8 bg-red-600/5 relative">
             {/* Corner Brackets */}
             <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-red-600" />
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-red-600" />

             <h1 className="text-3xl font-black uppercase italic mb-6 animate-pulse">System_Critical_Failure</h1>
             
             <div className="space-y-4 text-xs uppercase tracking-widest leading-relaxed">
                <p>[ERROR_LOG]: Unexpected kernel exception detected.</p>
                <p>[STATUS]: Security protocols engaged. UI Render suspended.</p>
                <p>[ACTION]: Please re-initialize the system link.</p>
             </div>

             <button 
                onClick={() => window.location.reload()}
                className="mt-10 w-full py-4 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300 font-black italic tracking-[0.3em]"
             >
                RE-INITIALIZE_UPLINK
             </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
