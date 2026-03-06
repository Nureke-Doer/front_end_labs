import { Component, type ReactNode } from "react";

interface Props { children: ReactNode; fallback: ReactNode; }
interface State { hasError: boolean; }

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  
  resetError = () => this.setState({ hasError: false });

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          {this.props.fallback}
          <br />
          <button onClick={this.resetError}>Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}