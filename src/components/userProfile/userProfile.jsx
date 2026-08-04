import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
} from "@/components/ui/avatar"

export function UserProfile({ firstName = "Dy Ann" }) {
  return (
    <div className="flex flex-col w-full pt-8 items-center">
      <Avatar className="size-24 mb-4">
        <AvatarFallback className="text-2xl font-semibold bg-violet-600 text-white">
          {firstName.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <h4>Hello, {firstName}!</h4>
    </div>
  )
}