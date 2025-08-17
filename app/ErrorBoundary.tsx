'use client'
import React from 'react'
export default class ErrorBoundary extends React.Component<{children:any},{hasError:boolean}>{
  constructor(props){super(props);this.state={hasError:false}}
  static getDerivedStateFromError(){return {hasError:true}}
  componentDidCatch(err:any,info:any){console.error('ErrorBoundary caught',err,info)}
  render(){ if(this.state.hasError){return <div><h1>Something went wrong.</h1><p>Please refresh.</p></div>} return this.props.children }
}
