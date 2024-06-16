import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      hello board
      <Button variant={"secondary"} size={"sm"}>
        你好
      </Button>
      <UserButton />
    </div>
  );
}
