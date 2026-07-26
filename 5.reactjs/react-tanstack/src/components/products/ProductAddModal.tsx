import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct, uploadImage } from "@/services/product.service";
import { useState, type ChangeEvent } from "react";
type Props = {
  open: boolean;
  onClose: () => void;
};
type Inputs = {
  title: string;
  price: string;
  description: string;
};
export default function ProductAddModal({ open, onClose }: Props) {
  const { register, handleSubmit, setValues } = useForm<Inputs>();
  const queryClient = useQueryClient();
  const [isSubmitting, setSubmitting] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("idle");
  const [image, setImage] = useState("");
  const addProductMutation = useMutation({
    mutationFn: addProduct,
    onMutate: () => {
      setSubmitting(true);
    },
    onSuccess: () => {
      onClose();
      setValues({
        title: "",
        price: "",
        description: "",
      });
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onSettled: () => {
      setSubmitting(true);
    },
  });
  const onSubmit = (data: Inputs) => {
    const productData = {
      ...data,
      price: +data.price,
      images: [image],
    };
    addProductMutation.mutate(productData);
  };
  const handleChangeImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const previewUrl = URL.createObjectURL(file!);
    setImage(previewUrl);

    //Upload file
    setUploadStatus("pending");
    const data = await uploadImage(file!);
    setImage(data.location);
    setUploadStatus("success");
    setTimeout(() => {
      setUploadStatus("idle");
    }, 2000);
  };
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-1/2">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium mb-3">
            Add new Product
          </DialogTitle>
          <DialogDescription asChild>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <Label className="mb-1">Name:</Label>
                <Input
                  type="text"
                  placeholder="Name..."
                  {...register("title")}
                />
              </div>
              <div className="mb-3">
                <Label className="mb-1">Price:</Label>
                <Input
                  type="number"
                  placeholder="Price..."
                  {...register("price")}
                />
              </div>
              <div className="mb-3">
                <Label className="mb-1">Description:</Label>
                <Textarea
                  placeholder="Description..."
                  {...register("description")}
                ></Textarea>
              </div>
              <div className="mb-3">
                <Label className="mb-1">Image</Label>
                <Input
                  type="file"
                  className="mb-3"
                  onChange={handleChangeImage}
                />
                <div className="w-50 h-50">
                  <img
                    src={
                      image
                        ? image
                        : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
                    }
                    alt=""
                  />
                  <p className="text-green-600">
                    {uploadStatus === "pending" && "Đang upload..."}
                    {uploadStatus === "success" && "Upload thành công"}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button>{isSubmitting ? "Saving..." : "Save"}</Button>
                <Button type="button" variant={"outline"} onClick={onClose}>
                  Cancel
                </Button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
