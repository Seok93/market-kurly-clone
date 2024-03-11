import React, { useState, FormEvent } from 'react';

import { Header } from '../Header';
import './LoginPage.css';

type User = {
    name: string;
};

export const LoginPage: React.FC = () => {
    const [user, setUser] = React.useState<User>();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // const [sessionID, setSessionID] = useState<string | null>(null);

    const handleLogin = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        // LoginApi 호출 

        // try {
        //     const response = await fetch('/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ username, password }),
        //     });
        //     if (response.ok) {
        //         const data = await response.json();
        //         // 서버에서 세션 ID를 받아와 저장
        //         setSessionID(data.sessionID);
        //     } else {
        //         alert('로그인 실패');
        //     }
        // } catch (error) {
        //     console.error('로그인 오류:', error);
        //     alert('로그인 오류가 발생했습니다.');
        // }

        if (username === 'example' && password === 'password') {
            if (username && password) {
                alert("로그인 성공");
            }
        } else {
            alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
        console.log(username, password);
    };

    return (
        <article>
            <Header
                user={user}
                onLogin={() => setUser({ name: 'Jane Doe' })}
                onLogout={() => setUser(undefined)}
                onCreateAccount={() => setUser({ name: 'Jane Doe' })}
            />
            <div className='login-section'>
                <div className='login-header'>
                    <h2>로그인</h2>
                </div>

                <div className='form-section'>
                    <form onSubmit={handleLogin}>
                        <div className='login-form'>
                            <div className='login-form-wrapper'>
                                <div className='login-form-container'>
                                    <input className='input-box'
                                        placeholder='아이디를 입력해주세요'
                                        type='text'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='login-form-wrapper'>
                                <div className='login-form-container'>
                                    <input className='input-box'
                                        placeholder='비밀번호를 입력해주세요'
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='find-btn'>
                            <a>아이디 찾기</a>
                            <span></span>
                            <a>비밀번호 찾기</a>
                        </div>
                        <div className='btn-section'>
                            <button type='submit'>
                                <span>로그인</span>
                            </button>
                            <button className='join'>
                                {/* onClick -> SignupPage로 화면전환 */}
                                <span>회원가입</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </article>
    );
};
