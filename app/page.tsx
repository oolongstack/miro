import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <p>
      hello board
      <Button variant={"secondary"} size={"sm"}>
        你好
      </Button>
      <UserButton />
    </p>
  );
}
