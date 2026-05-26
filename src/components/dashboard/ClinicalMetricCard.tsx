import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, type LucideIcon } from 'lucide-react';

interface ClinicalMetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: {
    value: string;
    isUp: boolean;
  };
  icon: LucideIcon;
  variant?: 'blue' | 'red' | 'green' | 'orange';
  delay?: number;
}

export function ClinicalMetricCard({ 
  title, 
  value, 
  subtitle, 
  trend, 
  icon: Icon, 
  variant = 'blue',
  delay = 0 
}: ClinicalMetricCardProps) {
  
  const colorMap = {
    blue: 'blue',
    red: 'red',
    green: 'green',
    orange: 'orange'
  };

  const selectedVariant = colorMap[variant] || 'blue';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2, transition: { duration: 0.15 } }}
      transition={{ duration: 0.4, delay }}
      className={cn("kpi-card", selectedVariant)}
    >
      <div className="kpi-header">
        <div>
          <p className="kpi-label uppercase">{title}</p>
          <h2 className="kpi-value mt-2 flex items-center">
            {value}
            {variant === 'red' && <span className="kpi-pulse" />}
          </h2>
        </div>
        <div className={cn("kpi-icon", selectedVariant)}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        {subtitle && (
          <p className="kpi-sub">
            {subtitle}
          </p>
        )}
        {trend && (
          <div className={cn(
            "kpi-trend",
            trend.isUp ? "up" : "down"
          )}>
            {trend.isUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>{trend.value}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
