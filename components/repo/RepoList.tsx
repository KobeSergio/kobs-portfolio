import type { Repo } from "@/lib/repos";
import RepoListRow from "./RepoListRow";

export default function RepoList({
  repos,
  title,
}: {
  repos: Repo[];
  title: string;
}) {
  return (
    <section aria-labelledby="list-title" className="flex flex-col">
      <h2
        id="list-title"
        className="border-b pb-4 text-base font-normal text-fg-muted"
      >
        {title}
      </h2>
      <ul>
        {repos.map((repo) => (
          <RepoListRow key={repo.slug} repo={repo} />
        ))}
      </ul>
    </section>
  );
}
