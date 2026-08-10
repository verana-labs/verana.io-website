import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  listPersonalWallets,
  type PersonalWallet,
} from "../lib/personal-wallets";

// The integrated personal wallets, built dynamically from the playground's
// personal-wallets.yaml (same source as section 3 of the playground home).
// Server component; each tile deep-links to that wallet's playground demo.

function WalletTile({ w }: { w: PersonalWallet }) {
  return (
    <a
      href={w.playgroundUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card group flex items-center gap-3.5 p-4 transition-colors hover:border-primary"
    >
      {w.icon ? (
        // eslint-disable-next-line @next/next/no-img-element -- small remote icons from the playground repo
        <img
          src={w.icon}
          alt=""
          aria-hidden
          width={40}
          height={40}
          className="h-10 w-10 shrink-0 rounded-lg border border-rule bg-white object-contain p-1"
        />
      ) : (
        <span
          aria-hidden
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-2 font-mono font-semibold text-primary"
        >
          {w.name.charAt(0)}
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="flex items-center gap-2">
          <span className="truncate font-semibold text-ink">{w.name}</span>
          {w.recommended ? (
            <span className="chip chip-verified shrink-0">recommended</span>
          ) : null}
        </span>
        <span className="mt-0.5 block truncate text-sm text-muted">
          {w.vendor}
        </span>
        <span className="mt-1.5 flex flex-wrap gap-1.5">
          {w.formats.map((f) => (
            <span
              key={f}
              className="rounded border border-rule px-1.5 py-0.5 font-mono text-[10px] text-muted"
            >
              {f}
            </span>
          ))}
          {w.browser ? (
            <span className="rounded border border-rule px-1.5 py-0.5 font-mono text-[10px] text-muted">
              browser
            </span>
          ) : null}
        </span>
      </span>
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-accent"
      />
    </a>
  );
}

export default async function PersonalWallets() {
  let wallets: PersonalWallet[] = [];
  let failed = false;
  try {
    wallets = await listPersonalWallets();
  } catch {
    failed = true;
  }

  if (failed || wallets.length === 0) {
    return (
      <div className="card flex items-start gap-3 p-6 text-sm text-muted">
        <FontAwesomeIcon
          icon={faTriangleExclamation}
          className="mt-0.5 h-4 w-4 shrink-0"
        />
        <p>
          The wallet list could not be loaded right now. It comes straight from
          the Verana Playground, where every integrated wallet is listed with
          its live demo.
        </p>
      </div>
    );
  }

  return (
    <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {wallets.map((w) => (
        <WalletTile key={w.id} w={w} />
      ))}
    </div>
  );
}
