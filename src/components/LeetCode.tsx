import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Code2, Target, Trophy, Flame } from 'lucide-react';

interface LeetCodeStatsData {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
}

export function LeetCode() {
  const [stats, setStats] = useState<LeetCodeStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      // Try multiple public CORS-enabled endpoints
      const endpoints = [
        'https://alfa-leetcode-api.onrender.com/Vaishnavi___2006/solved',
        'https://leetcode-stats-api.herokuapp.com/Vaishnavi___2006',
      ];

      for (const url of endpoints) {
        try {
          const response = await fetch(url, { signal: AbortSignal.timeout(8000) });
          if (!response.ok) continue;
          const data = await response.json();

          // alfa-leetcode-api shape
          if (data.solvedProblem !== undefined) {
            setStats({
              status: 'success',
              message: 'OK',
              totalSolved: data.solvedProblem ?? 0,
              totalQuestions: data.totalSubmissionNum?.[0]?.count ?? 0,
              easySolved: data.easySolved ?? 0,
              totalEasy: data.totalEasy ?? 0,
              mediumSolved: data.mediumSolved ?? 0,
              totalMedium: data.totalMedium ?? 0,
              hardSolved: data.hardSolved ?? 0,
              totalHard: data.totalHard ?? 0,
              acceptanceRate: data.acceptanceRate ?? 0,
              ranking: data.ranking ?? 0,
            });
            setLoading(false);
            return;
          }

          // leetcode-stats-api shape
          if (data.status === 'success') {
            setStats(data);
            setLoading(false);
            return;
          }
        } catch {
          // Try next endpoint
        }
      }

      setError(true);
      setLoading(false);
    };

    fetchStats();
  }, []);

  const chartData = stats ? [
    { name: 'Easy', value: stats.easySolved, color: '#00b8a3' },
    { name: 'Medium', value: stats.mediumSolved, color: '#ffc01e' },
    { name: 'Hard', value: stats.hardSolved, color: '#ff375f' },
  ] : [];

  return (
    <section className="py-12 relative z-10 bg-primary/5 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-4">LeetCode Profile</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {loading ? (
          <div className="glass-card rounded-2xl p-12 golden-border text-center">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground animate-pulse">Fetching stats from LeetCode...</p>
          </div>
        ) : error || !stats ? (
          <div className="glass-card rounded-2xl p-12 golden-border text-center">
            <Code2 size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-bold mb-2">Stats temporarily unavailable</h3>
            <p className="text-muted-foreground mb-6">Unable to connect to LeetCode API. Check out my profile directly!</p>
            <a 
              href="https://leetcode.com/Vaishnavi___2006/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full"
            >
              View Profile
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-12 gap-6">
            {/* Main Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 glass-card rounded-2xl p-8 golden-border flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
              
              <h3 className="text-xl font-serif mb-6 text-foreground/80 w-full text-left">Problems Solved</h3>
              
              <div className="w-48 h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'hsl(var(--card))', borderRadius: '8px', border: '1px solid var(--border)' }}
                      itemStyle={{ color: 'hsl(var(--foreground))' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-3xl font-bold">{stats.totalSolved}</span>
                  <span className="text-xs text-muted-foreground">Solved</span>
                </div>
              </div>

              <div className="w-full mt-6 flex justify-between px-4">
                <div className="text-center">
                  <div className="text-[#00b8a3] font-bold">{stats.easySolved}</div>
                  <div className="text-xs text-muted-foreground">Easy</div>
                </div>
                <div className="text-center">
                  <div className="text-[#ffc01e] font-bold">{stats.mediumSolved}</div>
                  <div className="text-xs text-muted-foreground">Medium</div>
                </div>
                <div className="text-center">
                  <div className="text-[#ff375f] font-bold">{stats.hardSolved}</div>
                  <div className="text-xs text-muted-foreground">Hard</div>
                </div>
              </div>
            </motion.div>

            {/* Metrics Grid */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 grid grid-cols-2 gap-4"
            >
              <MetricCard 
                icon={<Target size={24} className="text-primary" />}
                title="Acceptance Rate"
                value={`${stats.acceptanceRate}%`}
                delay={0.1}
              />
              <MetricCard 
                icon={<Trophy size={24} className="text-yellow-500" />}
                title="Global Ranking"
                value={stats.ranking.toLocaleString()}
                delay={0.2}
              />
              <div className="col-span-2 glass-card rounded-2xl p-6 golden-border mt-2">
                <h3 className="font-serif text-lg mb-4 flex items-center gap-2">
                  <Flame size={20} className="text-orange-500" />
                  Progress Breakdown
                </h3>
                
                <div className="space-y-4">
                  <ProgressBar label="Easy" solved={stats.easySolved} total={stats.totalEasy} color="bg-[#00b8a3]" />
                  <ProgressBar label="Medium" solved={stats.mediumSolved} total={stats.totalMedium} color="bg-[#ffc01e]" />
                  <ProgressBar label="Hard" solved={stats.hardSolved} total={stats.totalHard} color="bg-[#ff375f]" />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

function MetricCard({ icon, title, value, delay }: { icon: React.ReactNode, title: string, value: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="glass-card p-6 rounded-2xl golden-border flex flex-col items-center justify-center text-center gap-3"
    >
      <div className="p-3 rounded-full bg-background/50 border border-border">
        {icon}
      </div>
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </motion.div>
  );
}

function ProgressBar({ label, solved, total, color }: { label: string, solved: number, total: number, color: string }) {
  const percentage = total > 0 ? (solved / total) * 100 : 0;
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{solved} <span className="text-xs opacity-50">/ {total}</span></span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color} rounded-full`} 
        />
      </div>
    </div>
  );
}
