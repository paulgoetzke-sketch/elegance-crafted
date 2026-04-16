import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import type { PortfolioItem } from "@/data/portfolio";

interface LightboxProps {
  item: PortfolioItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Lightbox = ({ item, open, onOpenChange }: LightboxProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-[95vw] p-0 bg-surface-raised border-border overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{item?.title ?? "Werk"}</DialogTitle>
          <DialogDescription>{item?.description ?? ""}</DialogDescription>
        </VisuallyHidden>
        {item && (
          <div className="grid md:grid-cols-2">
            <div className="bg-surface-deep">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full max-h-[80vh] object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Werk
              </p>
              <h3 className="font-serif text-3xl md:text-4xl mb-6">{item.title}</h3>
              <div className="divider-gold w-16 mb-8" />

              <dl className="space-y-4 mb-8">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Material
                  </dt>
                  <dd className="text-foreground">{item.material}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Technik
                  </dt>
                  <dd className="text-foreground">{item.technique}</dd>
                </div>
              </dl>

              <p className="text-foreground/80 leading-relaxed">{item.description}</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Lightbox;
