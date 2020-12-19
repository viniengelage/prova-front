import React, { useCallback, useState} from 'react';
import { Form } from '@unform/web';
import { useAuth } from '../../hooks/auth'
import { useHistory } from 'react-router-dom'

// import { Container } from './styles';

import { MdEmail, MdLock} from 'react-icons/md'

import LoadingMask from 'react-loadingmask'

import InputBasic from '../../components/InputBasic';
import Button from '../../components/Button';

function Login() {
    const [loading, setLoading] = useState(false);
    const history = useHistory()
    const { signIn } = useAuth()
    const handleSubmit = useCallback( async (data) => {
        setLoading(true)
        try {
            const user = {
                email: data.email,
                password: data.password
            }
            await signIn(user)
            history.push('/home')
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    },[history, signIn])
  return (
    <Form onSubmit={handleSubmit}>
        <InputBasic name="email" icon={MdEmail} label="E-mail" placeholder="Digite seu e-mail"/>
        <InputBasic name="password" type="password" icon={MdLock} label="Senha" placeholder="Digite sua senha"/>
        <LoadingMask loading={loading} className="loading">
            <Button title="Fazer login" type="submit"/>
        </LoadingMask>
    </Form>
    );
}

export default Login;