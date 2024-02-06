import { useRef } from "react";

const LoginModal = (props) => {
  const modalBG = useRef(null);
  const kakaoClientId = import.meta.env.KAKAO_CLIENT_ID;
  const kakaoRedirectUri = import.meta.env.KAKAO_REDIRECT_URI;
  const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?scope=account_email&client_id=${kakaoClientId}&redirect_uri=${kakaoRedirectUri}&response_type=code&prompt=login`;
  const naverLoginURL = "https://i10a701.p.ssafy.io/oauth2/authorization/naver";

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-20 flex items-center justify-center bg-gray-500 bg-opacity-70"
      onClick={props.onClose}
      ref={modalBG}
    >
      <div
        className="z-10 px-10 py-4 bg-white rounded-3xl w-96 h-82"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="">
          <button className="" onClick={props.onClose}>
            x
          </button>
          <h3 className="">로 그 인</h3>
          <div className="flex flex-col">
            <a href={kakaoLoginURL}>
              <img
                className="object-cover h-16 w-36 rounded-xl"
                src="assets/kakao_login.png"
                // onClick={kakaoLogin}
              />
            </a>
            <button>
              <img
                className="object-cover h-16 w-36 rounded-xl"
                src="assets/naver_login.png"
                // onClick={naverLogin}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
