import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

// The three concept pages are a reading sequence (spec-v2 §1): each ends with
// a pointer to the next one.
export default function ConceptPager({
  nextHref,
  nextLabel,
}: {
  nextHref: string;
  nextLabel: string;
}) {
  return (
    <Link
      href={nextHref}
      className="card reveal group flex items-center justify-between p-6 transition-colors hover:border-primary"
    >
      <div>
        <span className="eyebrow">Next</span>
        <p className="display mt-1 text-xl text-ink">{nextLabel}</p>
      </div>
      <FontAwesomeIcon
        icon={faArrowRightLong}
        className="h-5 w-5 text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent"
      />
    </Link>
  );
}
