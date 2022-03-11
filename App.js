import * as React from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { Button, Text, StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import * as AuthSession from 'expo-auth-session'

WebBrowser.maybeCompleteAuthSession()

export default function App() {
    /*
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '619153764424-bbao6mprts3qopmisjr4grvvciue94aa.apps.googleusercontent.com',
        scopes: ['email', 'profile', 'openid'],
        redirectUri: makeRedirectUri({
            scheme: 'https://selenium.wpcp.org?id=auth490946',
        }),
    })

    React.useEffect(() => {
        if (response?.type === 'success') {
            console.log(`success!`)
            const { authentication } = response
        } else {
            console.log(`fail!`)
        }
    }, [response])
    */

    const handleGoogleLogin = async () => {
        console.log(`starting handleGoogleLogin`)
        //const redirectUrl = AuthSession.getRedirectUrl()
        let response = await AuthSession.startAsync({
            authUrl: `https://accounts.google.com/o/oauth2/auth?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fselenium.wpcp.org%3Fid%3Dauth490946&response_type=permission%20id_token&scope=email%20profile%20openid&odenid.realm&include_granted_scopes=true&client_id=619153764424-bbao6mprts3qopmisjr4grvvciue94aa.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fselenium.wpcp.org&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow`,
            //returnUrl: redirectUrl,
            redirectUri: AuthSession.makeRedirectUri({
                scheme: 'https://selenium.wpcp.org?id=auth490946',
            }),
        })
        console.log(`back from startAsync`)
        if (response?.type === 'success') {
            console.log(`success!`)
            const { authentication } = response
        } else {
            console.log(`fail!`)
        }
    }

    return (
        <View style={styles.container}>
            <Text>Let's try to login!</Text>
            <Button
                title="Login"
                onPress={() => {
                    handleGoogleLogin()
                }}
            />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
