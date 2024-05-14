import type { Dispatch } from "react"
import React, { useCallback } from "react"
import { useDropzone } from "@uploadthing/react"
import { generateClientDropzoneAccept } from "@uploadthing/shared"
import Image from "next/image"

interface FileUploaderProps {
  className?: string
  imageUrl: string
  setFile: Dispatch<React.SetStateAction<any>>
}

const FileUploader = ({ imageUrl, setFile }: FileUploaderProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setFile(reader.result)
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {imageUrl ? (
        <div>
          <Image width={250} height={250} src={imageUrl} alt="image" />
        </div>
      ) : (
        <div>
          <h3>Drop files here!</h3>
        </div>
      )}
    </div>
  )
}

export default FileUploader
