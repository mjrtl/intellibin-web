import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'

function App({ signOut, user }) {
    return (
      <div>
        <h1>Hey, {user.attributes.email}</h1>
        <button onClick={signOut}>Sign out</button>
      </div>
    )
  }

export default withAuthenticator(App)
