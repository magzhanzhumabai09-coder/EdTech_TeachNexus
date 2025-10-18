"use client";
import { Component, ReactNode } from 'react';

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error?: any }> {
  state = { hasError: false, error: undefined as any };
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any) {
    console.error('UI ErrorBoundary caught:', error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="glass p-4 rounded-xl">
          <h2 className="font-semibold mb-2">Something went wrong</h2>
          <pre className="text-xs opacity-80 whitespace-pre-wrap">{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}
