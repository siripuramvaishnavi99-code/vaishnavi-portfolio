import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, GitFork, ExternalLink, Code2, RefreshCw } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

const LANG_COLORS: Record<string, string> = {
  Python: '#3776ab',
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#264de4',
  Java: '#b07219',
  Jupyter: '#da5b0b',
  Shell: '#89e051',
};

export function GitHubStats() {
  const { theme } = useTheme();
  const themeParam = theme === 'dark' ? 'tokyonight' : 'buefy';
  const username = 'siripuramvaishnavi99-code';

  const [repos, setRepos] = useState<Repo[]>([]);
  const [reposLoading, setReposLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`)
      .then((r) => r.json())
      .then((data: Repo[]) => {
        if (Array.isArray(data)) setRepos(data);
      })
      .catch(() => {})
      .finally(() => setReposLoading(false));
  }, []);

  const displayedRepos = showAll ? repos : repos.slice(0, 6);

  return (
    <section id="stats" className="py-24 relative z-10 bg-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">GitHub Activity</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground">
            Live stats and all repositories from{' '}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              @{username}
            </a>
          </p>
        </motion.div>

        {/* Stats cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-4 md:p-6 rounded-2xl golden-border flex justify-center items-center overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${themeParam}&hide_border=true&bg_color=00000000`}
              alt="GitHub Stats"
              className="w-full max-w-md object-contain filter drop-shadow-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-4 md:p-6 rounded-2xl golden-border flex justify-center items-center overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${themeParam}&hide_border=true&bg_color=00000000`}
              alt="Top Languages"
              className="w-full max-w-md object-contain filter drop-shadow-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 md:p-6 rounded-2xl golden-border flex justify-center items-center overflow-hidden lg:col-span-2"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=${themeParam}&hide_border=true&background=00000000`}
              alt="GitHub Streak"
              className="w-full max-w-3xl object-contain filter drop-shadow-md"
            />
          </motion.div>
        </div>

        {/* Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-serif font-bold">
              All Repositories
              {repos.length > 0 && (
                <span className="ml-3 text-sm font-normal text-muted-foreground">
                  ({repos.length} total)
                </span>
              )}
            </h3>
            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
            >
              View on GitHub
              <ExternalLink size={14} />
            </a>
          </div>

          {reposLoading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <RefreshCw size={28} className="text-primary animate-spin" />
              <p className="text-muted-foreground">Loading repositories…</p>
            </div>
          ) : repos.length === 0 ? (
            <div className="text-center py-16 glass-card rounded-2xl golden-border">
              <Code2 size={40} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">Could not load repositories. View them directly on GitHub.</p>
              <a
                href={`https://github.com/${username}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Open GitHub
              </a>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedRepos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="glass-card p-5 rounded-2xl golden-border flex flex-col gap-3 hover:-translate-y-1 hover:border-primary/40 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-1 flex-1">
                        {repo.name}
                      </h4>
                      <ExternalLink size={13} className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 flex-1">
                      {repo.description || 'No description provided.'}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/50 text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{ backgroundColor: LANG_COLORS[repo.language] ?? '#8b949e' }}
                            />
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Star size={11} />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={11} />
                          {repo.forks_count}
                        </span>
                      </div>
                      <span className="text-[10px] opacity-60">
                        {new Date(repo.updated_at).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {repos.length > 6 && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAll((v) => !v)}
                    className="px-8 py-3 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    {showAll ? `Show Less` : `Show All ${repos.length} Repositories`}
                  </button>
                </div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
