'use client'
import type React from 'react'

import { useAdminThumbnail } from '../../../../packages/ui/src/hooks/useAdminThumbnail'

type TypeWithFile = {
  filename: string
  filesize: number
  mimeType: string
} & Record<string, unknown>

function docHasFilename(doc: Record<string, unknown>): doc is TypeWithFile {
  if (typeof doc === 'object' && 'filename' in doc) {
    return true
  }
  return false
}

export const adminThumbnailSrc = '/media/image-640x480.png'

function getThumbnailSrc({ doc }) {
  if (docHasFilename(doc)) {
    if (doc.mimeType.startsWith('image/')) {
      return null // Fallback to default admin thumbnail if image
    }
    return adminThumbnailSrc // Use custom thumbnail if not image
  }
  return null
}

export const RegisterAdminThumbnailFn: React.FC = () => {
  void useAdminThumbnail(getThumbnailSrc)

  return null
}