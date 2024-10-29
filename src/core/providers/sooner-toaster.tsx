import { Toaster, type ToasterProps } from 'sonner';

const SoonerToaster = ({ ...props }: ToasterProps) => {
    return (
        <Toaster
            richColors
            position='top-right'
            toastOptions={{
                classNames: {
                    content: 'text-sm font-sans'
                }
            }}
            {...props}
        />
    );
};

export default SoonerToaster;
