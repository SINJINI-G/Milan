import react from "react";
import MilanContext from "./MilanContext";

const MilanState = (props) => {
  const [drawerOpen, setDrawerOpen] = react.useState(true);
  const anchor = "left";
  const [state, setState] = react.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [isSignUpModalOpen, setIsSignUpModalOpen] = react.useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = react.useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = react.useState(false);

  const toggleSignUpModal = () => {
    if (isSignUpModalOpen) {
      setIsSignUpModalOpen(false);
      document.body.style.overflow = "unset";
      return;
    }
    setIsSignUpModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const toggleSignInModal = () => {
    if (isSignInModalOpen) {
      setIsSignInModalOpen(false);
      document.body.style.overflow = "unset";
      return;
    }
    setIsSignInModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const toggleNavbar = () => {
    if (isNavbarOpen) {
      setIsNavbarOpen(false);
      return;
    } else {
      setIsNavbarOpen(true);
    }
  };

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <MilanContext.Provider
      value={{
        drawerOpen,
        setDrawerOpen,
        anchor,
        state,
        setState,
        isSignUpModalOpen,
        toggleSignUpModal,
        isSignInModalOpen,
        toggleSignInModal,
        isNavbarOpen,
        toggleNavbar,
      }}
    >
      {props.children}
    </MilanContext.Provider>
  );
};

export default MilanState;
