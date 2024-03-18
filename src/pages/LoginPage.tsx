import React, { useState, FormEvent } from 'react';

import styles from '@styles/LoginPage.module.css';
import axios from 'axios';

type User = {
    name: string;
};

export const LoginPage: React.FC = () => {
    const [user, setUser] = React.useState<User>();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [sessionID, setSessionID] = useState<string | null>(null);

    // LoginApi 호출
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
            try {
                const response = await axios.post('/login', {
                    username,
                    password
                });

                if (response.status === 200) {
                    const data = response.data;
                    setSessionID(data.sessionID);
                } else {
                    alert('로그인 실패');
                }
            } catch (error) {
                console.error('로그인 오류:', error);
                alert('로그인 에러');
            }
        console.log(username, password);
    };


    return (
        <article>
            <div className={styles.login_section}>
                <div className={styles.login_header}>
                    <h2>로그인</h2>
                </div>

                <div className={styles.form_section}>
                    <form onSubmit={handleLogin} className={styles.login_section_form}>
                        <div className={styles.login_form}>
                            <div className={styles.login_form_wrapper}>
                                <div className={styles.login_form_container}>
                                    <input className={styles.input_box}
                                        placeholder='아이디를 입력해주세요'
                                        type='text'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className={styles.login_form_wrapper}>
                                <div className={styles.login_form_container}>
                                    <input className={styles.input_box}
                                        placeholder='비밀번호를 입력해주세요'
                                        type='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.find_btn}>
                            <a>아이디 찾기</a>
                            <span className={styles.span}></span>
                            <a>비밀번호 찾기</a>
                        </div>
                        <div className={styles.btn_section}>
                            <button type='submit' className={styles.btn_section_button}>
                                <span>로그인</span>
                            </button>
                            <button className={`${styles.btn_section_button} ${styles.join}`}>
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
