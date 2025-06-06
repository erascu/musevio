"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Input } from "../ui";
import { CircleCheckBig, Plus, Trash2, X } from "lucide-react";
import { useParams, useRouter, usePathname } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNewCollectionStore } from "@/stores/section-store";
import { toast } from "sonner";
import { useFavItemsStore } from "@/stores/favItems-store";

interface Props {
  className?: string;
}

export const SavedColPanel: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const regex = /^\/collections$/;

  const [input, setInput] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const { section } = useParams<{ section: string }>();

  const favItems = useFavItemsStore((state) => state.favItems);
  const newCollection = useNewCollectionStore((state) => state.newCollection);
  const removeFavItem = useFavItemsStore((state) => state.removeFavItem);

  const removeCollectionItems = (secTit: string) =>
    favItems
      .filter((item) => item.newCollectionSect && item.newCollectionSect)
      .map(
        (col) =>
          col.newCollectionSect &&
          col.newCollectionSect.toLowerCase() === secTit.toLowerCase() &&
          removeFavItem(col.id)
      );

  const addNewCollection = useNewCollectionStore(
    (state) => state.addNewCollection
  );
  const removeNewCollection = useNewCollectionStore(
    (state) => state.removeNewCollection
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value;
    setInput(newInput);
  };

  const handleCreate = () => {
    if (input.length > 0) {
      const sameTitle = newCollection.some(
        (title) =>
          title.replaceAll(" ", "").toLowerCase() ===
          input.replaceAll(" ", "").toLowerCase()
      );
      if (!sameTitle) {
        addNewCollection(input);
        setInput("");
        setOpen(false);
      } else {
        toast("⚠️ Duplicate Detected", {
          description: (
            <span className="text-white font-light !text-sm">
              A collection with this title already exists
            </span>
          ),
        });
      }
    }

    if (input.length === 0) {
      toast("❌ Validation Error", {
        description: (
          <span className="text-white font-light !text-sm">
            Collection name must be at least 1 character
          </span>
        ),
      });
    }
  };
  return (
    <div
      className={cn(
        "lg:min-w-[250px] flex-0 items-end lg:block flex overflow-y-auto lg:overflow-visible",
        className
      )}
    >
      <Link href="/collections">
        <Button
          variant={!section ? "default" : "outline"}
          className="lg:w-[186px] lg:h-[50px] h-7.5 px-4 py-1 mt-3 font-[300] lg:inline-flex"
        >
          Saved Works
        </Button>
      </Link>
      {newCollection.map((title, i) => (
        <div key={i} className="flex ml-3 lg:ml-0">
          <Link href={`/collections/${title}`}>
            <Button
              variant={
                decodeURIComponent(section) === title ? "default" : "outline"
              }
              className="lg:w-[186px] lg:h-[50px] h-7.5 px-4 py-1 mt-3 font-normal lg:inline-flex"
            >
              {title}
            </Button>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="add"
                className="lg:w-[50px] lg:h-[50px] w-[33.75px] h-[33.75px] !p-2 ml-2 mt-3 lg:inline-flex"
              >
                <Trash2 className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px]" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[250px]">
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription className="sr-only">
                  This will delete the collection section permanently. This
                  action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button
                    className="font-[300]"
                    onClick={() => {
                      if (regex.test(pathname)) {
                        removeNewCollection(title);
                        removeCollectionItems(title);
                      } else {
                        router.push("/collections");
                        setTimeout(() => {
                          removeNewCollection(title);
                          removeCollectionItems(title);
                        }, 300);
                      }
                    }}
                  >
                    Yes
                    <CircleCheckBig strokeWidth={2} size={20} />
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="gray" className="font-[300]">
                    No
                    <X strokeWidth={2} size={20} className="ml-[-5px]" />
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ))}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="add"
            className="lg:inline-flex lg:h-[50px] lg:w-[186px] lg:p-0 lg:ml-0 w-[33.75px] h-[33.75px] !p-2 ml-2 mt-3"
          >
            <span className="hidden lg:inline-flex">+Add New</span>
            <Plus className="lg:hidden w-[18px] h-[18px]" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Collection</DialogTitle>
            <DialogDescription className="sr-only">
              Enter a name for your new collection. Max 15 characters.
            </DialogDescription>
          </DialogHeader>
          <div className="relative">
            <Input
              placeholder="Collection name"
              className="border-1 rounded-sm h-[35px] font-[300] pr-14"
              value={input}
              onChange={onChange}
              maxLength={15}
            />
            <p className="absolute top-1/7 right-3 font-[300] !text-base text-ring">
              <span className={input.length === 0 ? "text-wine" : "text-ring"}>
                {input.length}
              </span>
              /15
            </p>
          </div>
          <DialogFooter>
            <Button className="font-[300]" onClick={handleCreate}>
              Create
              <Plus strokeWidth={2} size={20} className="ml-[-5px]" />
            </Button>
            <DialogClose asChild>
              <Button variant="gray" className="font-[300]">
                Cancel
                <X strokeWidth={2} size={20} className="ml-[-5px]" />
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
