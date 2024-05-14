import type { Dispatch, SetStateAction } from "react"
import React, { useCallback } from "react"
// @ts-ignore
import type { FileWithPath } from "@uploadthing/react"
import { useDropzone } from "@uploadthing/react"
import { generateClientDropzoneAccept } from "@uploadthing/shared"
import clsx from "clsx"
import Image from "next/image"

import { convertFileToUrl } from "@/hooks/utils"

import styles from "@/components/elements/formField/FormField.module.scss"

interface FileUploaderProps {
  onFieldChange: (url: string) => void
  imageUrl: string
  setFiles: Dispatch<SetStateAction<File[]>>
  className?: string
  error?: string
}

const FileUploader = React.forwardRef(
  (
    { className, error, setFiles, imageUrl, onFieldChange }: FileUploaderProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
      setFiles(acceptedFiles)
      onFieldChange(convertFileToUrl(acceptedFiles[0]))
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined
    })

    return (
      <>
        <div {...getRootProps()} ref={ref}>
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
        {error && <span className={clsx(styles.error, className)}>{error}</span>}
      </>
    )
  }
)

export default FileUploader
