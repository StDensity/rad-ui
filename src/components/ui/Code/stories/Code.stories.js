import Code from '../Code';
import SandboxEditor from '~/components/tools/SandboxEditor/SandboxEditor';

const Code_TEXT = 'console.log()';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Code',
    component: Code,
    render: (args) => <SandboxEditor>
        <div >
            <div className='flex space-x-2'>
                <Code className='space-x-1' {...args}>
         requestAnimationFrame()
                </Code>

                <Code className='space-x-1' {...args}>
                    {Code_TEXT}
                </Code>

            </div>

        </div>
    </SandboxEditor>
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const All = {
    args: {
        className: ''
    }
};

export const Color = {
    args: {
        color: 'green'
    }
}
