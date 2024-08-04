import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(true); // 로그인 또는 회원가입 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 추가

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = isSignup ? "/api/auth/signup" : "/api/auth/login";
    try {
      const response = await axios.post(url, inputs);
      alert(
        isSignup
          ? response.data.userId + "님 회원가입이 완료됐습니다."
          : inputs.username + "님 로그인 성공!"
      );
      setIsLoggedIn(true); // 로그인 상태 업데이트
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      alert("Logged out successfully");
      setIsLoggedIn(false); // 로그아웃 후 로그인 상태 업데이트
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  // 입력 상태 초기화
  const toggleSignupLogin = () => {
    setIsSignup(!isSignup);
    // 입력 필드 초기화
    setInputs({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>로그아웃</button>
          <p>반갑습니다, {inputs.username}님!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="닉네임"
            value={inputs.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={inputs.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={inputs.password}
            onChange={handleChange}
          />
          <button type="submit">{isSignup ? "회원가입" : "로그인"}</button>
          <button type="button" onClick={toggleSignupLogin}>
            {isSignup ? "로그인하기" : "회원가입 하기"}
          </button>
        </form>
      )}
    </div>
  );
}
