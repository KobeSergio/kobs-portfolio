import Image from "next/image";
import Link from "next/link";
import { profile } from "@/constants/site/site";
import { buildHref, fileName, repoHref, type Repo, type RepoDoc } from "@/lib/repos";
import { OutlinePill } from "@/components/site/Chips";
import { CheckIcon, ExternalIcon, FileIcon } from "@/components/site/Icons";
import Bullets from "./Bullets";
import Media from "./Media";

const h1 = "border-b pb-2 text-[32px] font-semibold leading-[1.25]";
const h2 = "mt-2 border-b pb-1.5 text-2xl font-semibold leading-[1.25]";

function shortAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

function Stack({ tech }: { tech: string[] }) {
  return (
    <p className="flex flex-wrap items-center gap-1.5">
      <strong className="font-semibold">Stack:</strong>
      {tech.map((item) => (
        <code
          key={item}
          className="rounded-md bg-counter px-1.5 py-0.5 font-mono text-[13px]"
        >
          {item}
        </code>
      ))}
    </p>
  );
}

function ReadmeBody({ repo }: { repo: Repo }) {
  const { readme } = repo;
  return (
    <>
      <h1 className={h1}>{repo.name}</h1>
      <p>{repo.summary}</p>

      {repo.contracts.length > 0 ? (
        <>
          <h2 className={h2}>On-chain</h2>
          <div className="overflow-x-auto">
            <table className="border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border px-[13px] py-1.5 text-left font-semibold">
                    Contract
                  </th>
                  <th className="border px-[13px] py-1.5 text-left font-semibold">
                    Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {repo.contracts.map((contract) => (
                  <tr key={contract.address}>
                    <td className="border px-[13px] py-1.5">{contract.label}</td>
                    <td className="border px-[13px] py-1.5">
                      <a
                        href={contract.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={contract.address}
                        className="font-mono text-[13px] text-link hover:underline"
                      >
                        {shortAddress(contract.address)}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : null}

      {repo.builds.length > 0 ? (
        <>
          <h2 className={h2}>Builds</h2>
          <ul className="flex list-disc flex-col gap-2 pl-6">
            {repo.builds.map((build) => (
              <li key={build.slug}>
                <Link
                  href={buildHref(repo, build)}
                  className="font-semibold text-link hover:underline"
                >
                  {build.title}
                </Link>
                <span className="text-fg-muted">: {build.impact}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}

      {readme ? (
        <>
          {repo.kind === "projects" ? (
            <Media images={readme.images} poster={readme.poster} alt={repo.name} />
          ) : null}
          <h2 className={h2}>How I built it</h2>
          {readme.impact ? (
            <p>
              <strong className="font-semibold">{readme.impact}</strong>
            </p>
          ) : null}
          {repo.kind !== "projects" ? (
            <Media images={readme.images} poster={readme.poster} alt={repo.name} />
          ) : null}
          <Bullets items={readme.bullets} />
          <Stack tech={readme.tech} />
        </>
      ) : null}
    </>
  );
}

function BuildBody({ build }: { build: RepoDoc }) {
  return (
    <>
      <h1 className={h1}>{build.title}</h1>
      <p>
        <strong className="font-semibold">{build.impact}</strong>
      </p>
      <Media images={build.images} poster={build.poster} alt={build.title} />
      <h2 className={h2}>How I built it</h2>
      <Bullets items={build.bullets} />
      <Stack tech={build.tech} />
    </>
  );
}

export default function FileContent({
  repo,
  build,
}: {
  repo: Repo;
  build?: RepoDoc;
}) {
  const file = fileName(build);
  const link = build ? build.link : (repo.readme?.link ?? "");
  // The commit message is the build's impact line, or the role on a README.
  // Projects use the headline (their summary) with the statuses as pills.
  const message = build ? build.impact : (repo.role ?? repo.summary);

  return (
    <div className="flex min-w-0 flex-[6_1_520px] flex-col gap-4">
      <p className="flex flex-wrap items-center gap-2 text-xl">
        <Link
          href={repoHref(repo)}
          className="font-semibold text-link hover:underline"
        >
          {repo.slug}
        </Link>
        <span className="text-fg-muted">/</span>
        <strong className="font-semibold">{file}</strong>
      </p>

      <div className="flex flex-wrap items-center gap-2.5 rounded-md border px-4 py-3">
        <Image
          src={profile.avatar}
          alt=""
          width={22}
          height={22}
          className="size-[22px] rounded-full object-cover"
        />
        <strong>{profile.handle}</strong>
        <span className="min-w-0 flex-[1_1_200px] truncate text-fg-muted">
          {message}
        </span>
        <CheckIcon stroke="currentColor" className="text-success-fg" />
        {repo.kind === "projects" ? (
          repo.pills.map((pill) => <OutlinePill key={pill}>{pill}</OutlinePill>)
        ) : (
          <span className="text-[13px] text-fg-muted">{repo.period}</span>
        )}
      </div>

      <article className="overflow-hidden rounded-md border">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b bg-surface py-2 pl-4 pr-2">
          <span className="inline-flex items-center gap-2 font-semibold">
            <FileIcon />
            {file}
          </span>
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-8 items-center gap-1.5 rounded-md border bg-btn px-3 text-xs font-semibold text-fg"
            >
              View build
              <ExternalIcon size={12} />
            </a>
          ) : null}
        </div>
        <div className="flex flex-col gap-4 p-[clamp(16px,4vw,32px)] text-base leading-[1.6]">
          {build ? <BuildBody build={build} /> : <ReadmeBody repo={repo} />}
        </div>
      </article>
    </div>
  );
}
