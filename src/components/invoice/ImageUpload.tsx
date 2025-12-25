import { useRef } from 'react';
import { ImagePlus, X } from 'lucide-react';

interface ImageUploadProps {
  image: string | null;
  onImageChange: (image: string | null) => void;
}

export function ImageUpload({ image, onImageChange }: ImageUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onImageChange(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      className="w-16 h-16 rounded-lg border border-dashed border-[var(--border-light)] bg-[var(--bg-input)] flex items-center justify-center cursor-pointer hover:border-[var(--accent-teal)] hover:bg-[var(--accent-teal-light)] transition-all relative group overflow-hidden"
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {image ? (
        <>
          <img
            src={image}
            alt="Item"
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            onClick={handleRemove}
            className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <X size={12} />
          </button>
        </>
      ) : (
        <ImagePlus size={20} className="text-[var(--text-disabled)]" />
      )}
    </div>
  );
}
