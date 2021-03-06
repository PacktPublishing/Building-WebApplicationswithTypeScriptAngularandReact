{\rtf1\ansi\ansicpg1252\deff0\deflang1033{\fonttbl{\f0\fmodern\fprq1\fcharset0 Lucida Console;}{\f1\fnil\fcharset0 Calibri;}}
{\*\generator Msftedit 5.41.21.2510;}\viewkind4\uc1\pard\brdrl\brdrs\brdrw10\brsp80 \brdrt\brdrs\brdrw10\brsp120 \brdrr\brdrs\brdrw10\brsp80 \brdrb\brdrs\brdrw10\brsp180 \li720\ri720\sb180\sa180\f0\fs19 import * as React from "react";\par
\par
interface Props \{\par
  name: string;\par
\}\par
\par
interface State \{\par
  count: number;\par
\}\par
\par
export default class Hello extends React.Component<Props, State> \{\par
  state = \{\par
    count: 0\par
  \}\par
\par
  increment() \{\par
    this.setState(\{\par
      count: this.state.count + 1\par
    \});\par
  \}\par
\par
  render() \{\par
    return <div>\par
      <h1>Hello \{this.props.name\} \{this.state.count\}</h1>\par
      <button onClick=\{() => this.increment()\}>Increment</button>\par
    </div>\par
  \}\par
\}\par
\pard\sa200\sl276\slmult1\lang9\f1\fs22\par
}
 