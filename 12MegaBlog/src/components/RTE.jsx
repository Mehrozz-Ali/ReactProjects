import React from "react"
import {Editor} from "@tinymce/tinymce-react"
import {Controller} from 'react-hook-form'


export default function RTE({ name, control, label, defaultValue = "", }) {
    return (
        // <Editor 
        // initialValue="Default value"
        // init={
        //     {
        //         branding:"false",
        //         height:"500",
        //         menubar:"true",
        //         plugins:[
        //             'advlist autolink lists link image charmap print preview achor ',
        //             'searchreplace visualblocks code fullscreen',
        //             'insetdatatime media table paste code help wordcount'
        //         ],
        //         toolbar:'undo redo | formatselect | bold italic backcolor | \
        //         alignleft aligncenter alignright alignjustify | \
        //         bullist numlist outdent indent | removeformat | help'
        //     }
        // }
        // />
        <div className="w-full ">
            {label && <label className="text-sm text-gray-600">{label}</label>}
            <control
                name={name || "content"}
                control={control}
                render={({ field: { onChange } }) => (
                    <Editor
                        initialValue="Default value"
                        init={
                            {
                                initialValue: defaultValue,
                                branding: "false",
                                height: "500",
                                menubar: "true",
                                plugins: [
                                    "image", "advlist", "autolink", "lists", "link", "image", "charmap",
                                    "preview", "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
                                    "insertdatatime", "media", "table", "code", "help", "wordcount", "anchor"
                                ],
                                toolbar:
                                    "undo redo | blocks | image | formatselect | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                                content_style:
                                    "body {font-family:Helvetica, Arial,sans-sarif: font-size:14px}"

                            }
                        }
                        onEditorChange={onChange}
                    />
                )}
            />
        </div>
    )
}

