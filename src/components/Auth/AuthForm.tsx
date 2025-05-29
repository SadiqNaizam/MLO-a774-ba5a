import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Form schema definition
const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).min(1, { message: "Email is required." }),
  password: z.string().min(1, { message: "Password is required." }).min(6, { message: "Password must be at least 6 characters." }),
});

// Type for form data inferred from schema
type FormData = z.infer<typeof formSchema>;

interface AuthFormProps {
  className?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Login Data:', data);
    // Implement actual login logic here (e.g., API call)
    // For demonstration, we're just logging to console.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("flex flex-col gap-4", className)}>
      {/* Email Field */}
      <div>
        <Label htmlFor="email" className="block text-sm font-normal text-muted-foreground mb-1.5">
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
          className={cn(errors.email && "border-destructive focus-visible:ring-destructive")}
          disabled={isSubmitting}
        />
        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
      </div>

      {/* Password Field & Forgot Password Link */}
      <div>
        <Label htmlFor="password" className="block text-sm font-normal text-muted-foreground mb-1.5">
          Password
        </Label>
        <Input
          id="password"
          type="password"
          autoComplete="current-password"
          {...register("password")}
          className={cn(errors.password && "border-destructive focus-visible:ring-destructive")}
          disabled={isSubmitting}
        />
        {errors.password && <p className="text-xs text-destructive mt-1">{errors.password.message}</p>}
        <div className="mt-1.5 text-right">
          <Button 
            variant="link" 
            type="button" 
            className="px-0 h-auto text-sm font-normal text-linkText hover:text-linkText/80"
            onClick={() => console.log('Forgot Password clicked')}
            disabled={isSubmitting}
          >
            Forgot Password
          </Button>
        </div>
      </div>
      
      {/* Login Button */}
      <Button 
        type="submit" 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-md py-2.5 text-base font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Logging in...' : 'Login'}
      </Button>

      {/* Sign Up Text */}
      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{' '}
        <Button 
          variant="link" 
          type="button" 
          className="p-0 h-auto font-semibold text-linkText hover:text-linkText/80"
          onClick={() => console.log('SignUp clicked')}
          disabled={isSubmitting}
        >
          SignUp
        </Button>
      </p>
    </form>
  );
};

export default AuthForm;
