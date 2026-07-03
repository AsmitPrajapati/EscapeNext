// import Modal from "../Modal/modal";
// import LoginPage from "../../local/login/login";
// import SignupPage from "../../local/signup/signup";

// function AuthModal({ type, onClose, switchAuth }) {
//   return (
//      <Modal isOpen={!!type} onClose={onClose}>
      
//       {type === "login" && (
//         <LoginPage
//           onClose={onClose}
//           switchAuth={() => switchAuth("signup")}
//         />
//       )}

//       {type === "signup" && (
//         <SignupPage
//           onClose={onClose}
//           switchAuth={() => switchAuth("login")}
//         />
//       )}

//       {type === "forgot-password" && (
//         <ForgotPassword
//           onClose={onClose}
//           switchAuth={() => switchAuth("forgot-password")}
//         />
//       )}
//     </Modal>
//   );
// }

// export default AuthModal;



import Modal from "../Modal/modal";
import LoginPage from "../../local/login/login";
import SignupPage from "../../local/signup/signup";
import ForgotPassword from "../../local/Forgot/forgot";

function AuthModal({ type, onClose, switchAuth }) {
  return (
    <Modal isOpen={!!type} onClose={onClose}>

      {type === "login" && (
        <LoginPage
          onClose={onClose}
          switchAuth={switchAuth}
        />
      )}

      {type === "signup" && (
        <SignupPage
          onClose={onClose}
          switchAuth={switchAuth}
        />
      )}

      {type === "forgot-password" && (
        <ForgotPassword
          onClose={onClose}
          switchAuth={switchAuth}
        />
      )}

    </Modal>
  );
}

export default AuthModal;
