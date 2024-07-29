import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (<div className=' flex flex-col justify-center align-middle w-full h-full text-center bg-black'>
        <h1 className='text-center bg-cyan-500 w-50 m-auto p-4 rounded-md font-bold text-4xl'>Something went wrong.</h1>
        <h1  className='text-white w-50 m-auto text-2xl font-bold'>Please Refresh</h1>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
