import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://webchat.hyperflow.global/sdk.js";
    script.async = true;

    script.onload = () => {
      if (window.Hyperflow) {
        window.Hyperflow.init("6041be8906775add5ebd6ebc2016bbd7");
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex bg-slate-500 justify-center p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-white absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-white font-bold text-center">
            Gerenciador de tarefa
          </h1>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
