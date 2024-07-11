'use client'
import React, { useState } from 'react';
import FormSection from '../_components/Formsection';
import OutputScreen from '../_components/OutputScreen';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { chatSession } from '@/utils/AIModel';




interface Props {
    params: {
        'template-slug': string;
    };
}

const CreateNewContent = (props: Props) => {
   
    const [loading, setLoading] = useState(false);
    const [aioutput, setAioutput] = useState<string>('');



    const generateAIContent = async (formData: Record<string, string>) => {
        try {
            setLoading(true);
            const selectedTemplate = Templates.find((item) => item.slug === props.params['template-slug']);
            if (!selectedTemplate) {
                throw new Error('Template not found');
            }

            const selectedPrompt = selectedTemplate.aiPrompt;
            const finalAiPrompt = JSON.stringify(formData) + "," + selectedPrompt;
            const result = await chatSession.sendMessage(finalAiPrompt);
            const aiResult = await result.response.text();
            console.log('AI Result:', aiResult);
            setAioutput(aiResult);

       
      
        } catch (error) {
            console.error('Error generating AI content:', error);
          
        } finally {
            setLoading(false);
        }
    };

    const selectedTemplate = Templates.find((item) => item.slug === props.params['template-slug']);

    if (!selectedTemplate) {
        return <div>Template not found</div>;
    }

    const formItems = selectedTemplate.form.map((item) => ({
        ...item,
        field: item.field as 'input' | 'textarea',
    }));

    return (
        <div className='p-10'>
            <Link href={'/dashboard'}>
                <Button><ArrowLeft />Back</Button>
            </Link>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 py-5'>
                <FormSection
                    loading={loading}
                    selectedTemplate={{ ...selectedTemplate, form: formItems }}
                    onFormSubmit={generateAIContent}
                />
                <div className='col-span-2'>
                    <OutputScreen aioutput={aioutput} />
                </div>
            </div>
        </div>
    );
};

export default CreateNewContent;
