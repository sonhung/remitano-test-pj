import { Button, Form, Input } from "antd";
import { useAuth } from "@/contexts";

const validateMessages = {
  required: "Please input your ${label}",
  types: {
    email: "Email is not a valid!",
  },
};

const Login = () => {
  const { doLogin } = useAuth();

  return (
    <Form
      onFinish={doLogin}
      layout="inline"
      validateMessages={validateMessages}
    >
      <Form.Item
        name="email"
        placeholder="Email"
        rules={[
          {
            required: true,
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        placeholder="Password"
        name="password"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="bg-blue-500 mt-3 sm:mt-0">
          Login / Register
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Login;
