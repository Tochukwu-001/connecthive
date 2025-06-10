'use client'
import React, { useState } from 'react'
import { Field, Formik, ErrorMessage, Form } from 'formik'
import * as Yup from 'yup'

const Achievement = ({session}) => {
    const [position, setPosition] = useState("")
    const [achievement, setAchievement] = useState("")
    console.log(session);
    
    console.log(session)
    const iv =  {
        position: '',
        achievement: '',
    }
    const vs = Yup.object({
        position: Yup.string()
            .required('Position is a required field')
            .min(2, 'Position must be at least 2 characters long'),
        achievement: Yup.string()
            .required('Achievement is a required field')
            .min(10, 'Achievement must be at least 10 characters long'),
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const achievementData = {
            image: session?.user?.image,
            name: session?.user?.name,
            timestamp: new Date().toLocaleDateString(),
            position,
            achievement
        }

        console.log(achievementData);
        
    }
    return (
        <main className="min-h-dvh p-5">
            <h1 className='text-center text-black text-xl font-bold text-gray-800 md:text-3xl'>
                Share your achievements with the community!
            </h1>
            <Formik initialValues={iv} validationSchema={vs}>
                <Form onSubmit={handleSubmit} className='max-w-3xl mx-auto my-5 p-5 rounded-lg shadow-lg bg-white space-y-5'>
                    <div>
                        <Field
                            type="text"
                            name="position"
                            value={position}
                            onChange={(e)=> {setPosition(e.target.value)}}
                            placeholder="Position..."
                            className="border p-3 outline-none text-black border-gray-300 rounded-md w-full mb-4"
                        />
                        <ErrorMessage name="position" component="div" className="text-red-500 text-sm mb-2" />
                    </div>
                    <div>
                        <Field
                            as="textarea"
                            name="achievement"
                            value={achievement}
                            onChange={(e)=> {setAchievement(e.target.value)}}
                            placeholder="Share your Achievement..."
                            className="border p-3 outline-none text-black border-gray-300 rounded-md w-full mb-4"
                        />
                        <ErrorMessage name="achievement" component="div" className="text-red-500 text-sm mb-2" />
                    </div>
                    <button
                        type="submit" className='bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full font-semibold'>
                        Share Achievement
                    </button>
                </Form>
            </Formik>
        </main>
    )
}

export default Achievement