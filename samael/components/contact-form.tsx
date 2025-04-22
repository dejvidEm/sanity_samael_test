"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { Locale } from "@/types"

interface ContactFormProps {
  dictionary: {
    name: string
    email: string
    phone: string
    subject: string
    message: string
    submit: string
    success: string
    error: string
    subjectOptions: {
      label: string
      value: string
    }[]
  }
  lang: Locale
}

export default function ContactForm({ dictionary, lang }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would normally send the data to your API
      // For now we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setFormStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    } catch (error) {
      setFormStatus("error")

      // Reset error status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">{dictionary.name}</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required aria-required="true" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{dictionary.email}</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            aria-required="true"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">{dictionary.phone}</Label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">{dictionary.subject}</Label>
          <Select onValueChange={handleSelectChange} value={formData.subject}>
            <SelectTrigger id="subject">
              <SelectValue placeholder={dictionary.subject} />
            </SelectTrigger>
            <SelectContent>
              {dictionary.subjectOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{dictionary.message}</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-navy-900 hover:bg-navy-800"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : dictionary.submit}
      </Button>

      {formStatus === "success" && (
        <div className="p-3 bg-green-100 text-green-700 rounded-md" role="alert">
          {dictionary.success}
        </div>
      )}

      {formStatus === "error" && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md" role="alert">
          {dictionary.error}
        </div>
      )}
    </form>
  )
}
