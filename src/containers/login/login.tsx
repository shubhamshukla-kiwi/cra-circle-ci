import LoginModal from '../../components/login-modal/login-modal';
import OnboardingHeader from '../../components/onboarding-header/onboarding-header';
import OnboardingFooter from '../../components/onboarding-footer/onboarding-footer';
import Loading from '../../components/loading2/loading';


const Login = () => {
  return (
    <div className="login">
      <Loading />
      <OnboardingHeader />
      <LoginModal
        activeScreen="login"
        allowSwitch={false}
        user_title="CUSTOMER"
      />
      <OnboardingFooter />
    </div>
  );
}

export default Login;