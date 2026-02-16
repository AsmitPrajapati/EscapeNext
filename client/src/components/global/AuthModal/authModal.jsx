import Modal from "../Modal/modal";
import LoginPage from "../../local/login/login";
import SignupPage from "../../local/signup/signup";

function AuthModal({ type, onClose, switchAuth }) {
  return (
     <Modal isOpen={!!type} onClose={onClose}>
      
      {type === "login" && (
        <LoginPage
          onClose={onClose}
          switchAuth={() => switchAuth("signup")}
        />
      )}

      {type === "signup" && (
        <SignupPage
          onClose={onClose}
          switchAuth={() => switchAuth("login")}
        />
      )}
    </Modal>
  );
}

export default AuthModal;
