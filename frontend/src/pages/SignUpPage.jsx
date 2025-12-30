import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  EyeOff,
  Eye,
  Loader2Icon,
} from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      return toast.error("Full name is required.");
    }
    if (!formData.email.trim()) {
      return toast.error("Email is required.");
    }
    if (!formData.password.trim()) {
      return toast.error("Password is required.");
    }
    if (formData.password.lenght < 6) {
      return toast.error("Password must be at least 6 characters");
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();
    if (success) {
      signup(formData);
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900 min-h-screen">
      <div className="relative w-full max-w-6xl md:h-[800px] h-[650px]">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            {/* FORM CLOUMN - LEFT SIDE */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">
                {/* HEADING TEXT */}
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
                  <h2 className="text-2xl font-bold text-slate-200 mb-2">
                    Create Account
                  </h2>
                  <p className="text-slate-400">Sign up for a new account</p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* FULL NAME */}
                  <div>
                    <div className="relative space-y-2">
                      <div className="flex gap-2">
                        <UserIcon className="auth-input-icon" />
                        <label className="auth-input-label">Full Name</label>
                      </div>

                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="input input-bordered input-primary min-w-full max-w-xs"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* EMAIL INPUT */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <MailIcon className="auth-input-icon" />
                      <label className="auth-input-label">Email</label>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input input-bordered input-primary min-w-full max-w-xs"
                        placeholder="someone@example.com"
                      />
                    </div>
                  </div>

                  {/* PASSWORD INPUT */}
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <LockIcon className="auth-input-icon" />
                      <label className="auth-input-label">Password</label>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input input-bordered input-primary min-w-full max-w-xs"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
                      >
                        {showPassword ? (
                          <EyeOff className="size-5 text-base-content/40" />
                        ) : (
                          <Eye className="size-5 text-base-content/40" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div>
                    <button
                      className="btn btn-outline btn-primary min-w-full"
                      type="submit"
                      disabled={isSigningUp}
                    >
                      {isSigningUp ? (
                        <Loader2Icon className="w-full h-5 animate-spin text-center" >Loading...</Loader2Icon>
                      ) : (
                        "Create Account"
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/login" className="auth-link">
                    Already have an account?{" "}
                    <span className="text-cyan-300 font-bold underline">
                      Sign in 
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* FORM ILLUSTRATION - RIGHT SIDE */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-gradient-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/signup.png"
                  alt="People using mobile devices"
                  className="w-full h-auto object-contain"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-cyan-400">
                    Start Your Journey Today
                  </h3>

                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy Setup</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
};

export default SignUpPage;
