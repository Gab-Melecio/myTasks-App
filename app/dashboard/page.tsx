"use client";
import catPic from './cat.jpg';
import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { 
  Bell, 
  LogOut, 
  User, 
  LayoutDashboard, 
  Info, 
  Plus, 
  Clock,
  CheckCircle2,
  ListTodo,
  Calendar,
  Trash2,
  Pencil,
  X,
  Code2,
  Component,
  Boxes
} from "lucide-react";

// --- Components ---

interface HeaderProps {
  title: string;
  username: string;
  onLogout: () => void;
}

function Header({ title, username, onLogout }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 sticky top-0 z-20">
      <h1 className="text-xl font-bold tracking-tight text-slate-800">{title}</h1>
      
      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-black transition-colors relative">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
          <div className="flex flex-col items-end">
            <span className="text-sm font-semibold">{username}</span>
            <span className="text-xs text-gray-500">Admin</span>
          </div>
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
            <User size={20} />
          </div>
        </div>

        <button 
          onClick={onLogout}
          className="p-2 text-gray-400 hover:text-red-600 transition-all"
          title="Logout"
        >
          <LogOut size={20} />
        </button>
      </div>
    </header>
  );
}

function Sidebar({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 hidden md:flex flex-col h-[calc(100vh-73px)] sticky top-[73px]">
      <div className="p-4 space-y-2">
        <button 
          onClick={() => onTabChange("dashboard")}
          className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === "dashboard" ? "bg-gray-100 text-black" : "text-gray-500 hover:bg-gray-50"}`}
        >
          <LayoutDashboard size={18} /> Dashboard
        </button>
        <button 
           onClick={() => onTabChange("About App")}
           className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${activeTab === "About App" ? "bg-gray-100 text-black" : "text-gray-500 hover:bg-gray-50"}`}
        >
          <Info size={18} /> About App
        </button>
      </div>
    </aside>
  );
}

// --- SETTINGS COMPONENT ---
function SettingsView() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-2xl font-bold mb-4">Information</h2>
        
        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-md relative bg-gray-200 mb-8 group">
          <img 
            src={catPic.src} 
            alt="My Cat" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
            <p className="text-white font-bold text-lg">My Cats</p>
            <p className="text-white/80 text-sm">Meow.</p>
          </div>
        </div>
      </div>

      {/* TECHNICAL SUMMARY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Components Used */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Component size={20} /></div>
            <h3 className="font-bold text-lg">Components Used</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>Header (Layout)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>Sidebar (Navigation)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>StatCard (Metrics)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>TaskCard (Item Display)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>KanbanColumn (List Container)</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>TaskModal (Form Input)</li>
          </ul>
        </div>

        {/* Props & State */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Boxes size={20} /></div>
            <h3 className="font-bold text-lg">Key Props & State</h3>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>activeTab</span> <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">string</span>
            </li>
             <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>tasks</span> <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">Task[] array</span>
            </li>
             <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>onLogout</span> <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">function</span>
            </li>
            <li className="flex justify-between border-b border-gray-100 pb-1">
              <span>isOpen</span> <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">boolean (Modal)</span>
            </li>
             <li className="flex justify-between pt-1">
              <span>priority</span> <span className="font-mono text-xs bg-gray-100 px-2 py-0.5 rounded">'low' | 'medium' | 'high'</span>
            </li>
          </ul>
        </div>

        {/* Lucide Icons */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
           <div className="flex items-center gap-2 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Code2 size={20} /></div>
            <h3 className="font-bold text-lg">Lucide React Icons</h3>
          </div>
          <p className="text-sm text-gray-500 mb-4">The following icons were imported and utilized for UI elements:</p>
          <div className="flex flex-wrap gap-2">
            {[
              "Bell", "LogOut", "User", "LayoutDashboard", "Info", 
              "Plus", "Clock", "CheckCircle2", "ListTodo", 
              "Calendar", "Trash2", "Pencil", "X"
            ].map((icon) => (
              <span key={icon} className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// --- EXISTING COMPONENTS  ---

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg: string;
  textColor: string;
}

function StatCard({ label, value, icon, iconBg, textColor }: StatCardProps) {
  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between">
      <div>
        <p className="text-sm text-gray-500 font-medium mb-1">{label}</p>
        <p className={`text-2xl font-bold ${textColor}`}>{value}</p>
      </div>
      <div className={`p-2.5 rounded-lg ${iconBg}`}>
        {icon}
      </div>
    </div>
  );
}

interface TaskCardProps {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: Task['status'];
  date?: string;
  onEdit: () => void;
  onChangeStatus: (task: Task, newStatus: Task['status']) => void;
  onDelete: () => void;
}

function TaskCard({ id, title, description, priority, status, date, onEdit, onChangeStatus, onDelete }: TaskCardProps) {
  const priorityColors = {
    low: "bg-blue-50 text-blue-600",
    medium: "bg-yellow-50 text-yellow-600",
    high: "bg-red-50 text-red-600"
  };

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm mb-4 group transition-all duration-300 hover:shadow-md hover:border-black/10">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <h4 className="font-semibold text-gray-800 pr-4">{title}</h4>
          <div className="flex items-center gap-1 flex-shrink-0">
            <button onClick={onEdit} className="p-1 rounded-md hover:bg-gray-100 transition-colors">
              <Pencil size={15} className="text-gray-500 hover:text-black" />
            </button>
            <button onClick={onDelete} className="p-1 rounded-md hover:bg-gray-100 transition-colors">
              <Trash2 size={15} className="text-gray-500 hover:text-red-600" />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      
      {/* Status Selector */}
        <div>
          <label htmlFor={`status-${id}`} className="sr-only">Change status</label>
          <select
            id={`status-${id}`}
            value={status}
            onChange={(e) => onChangeStatus({ id, title, description, priority, status, date }, e.target.value as Task['status'])}
            className="w-full p-2 border border-gray-200 rounded-lg text-sm bg-gray-50/80 focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${priorityColors[priority]}`}>
            {priority}
          </span>
          {date && (
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Calendar size={14} />
              {date}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface Task {
  id: number;
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  status: "backlog" | "todo" | "inprogress" | "done";
  date?: string;
}

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
  status: Task['status'];
  onAddTask: (status: Task['status']) => void;
  onMoveTask: (task: Task, status: Task['status']) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: number) => void;
  countColor: string;
  borderColor?: string;
}

function KanbanColumn({ title, tasks, status, onAddTask, onMoveTask, onEditTask, onDeleteTask, countColor, borderColor }: KanbanColumnProps) {
    return (
    <div className={`bg-gray-50/50 rounded-2xl p-4 border border-gray-100 ${borderColor}`}>
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-sm">{title}</h3>
          <span className={`${countColor} text-[10px] px-2 py-0.5 rounded-full font-semibold`}>
            {tasks.length}
          </span>
        </div>
        <button onClick={() => onAddTask(status)} className="p-1 rounded-md hover:bg-gray-200 transition-colors">
          <Plus size={16} className="text-gray-500" />
        </button>
      </div>
      <div className="h-full">
        {tasks.map(task => (
          <TaskCard 
            key={task.id}
            {...task}
            onChangeStatus={onMoveTask}
            onEdit={() => onEditTask(task)}
            onDelete={() => onDeleteTask(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Omit<Task, 'id' | 'status'> & { id?: number }) => void;
  taskToEdit: Task | null;
}

function TaskModal({ isOpen, onClose, onSave, taskToEdit }: TaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Task['priority']>('medium');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setPriority(taskToEdit.priority);
    } else {
      setTitle("");
      setDescription("");
      setPriority("medium");
    }
  }, [taskToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({ id: taskToEdit?.id, title, description, priority });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-30 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{taskToEdit ? 'Edit Task' : 'Add New Task'}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-1">Title</label>
            <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black" required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-600 mb-1">Description</label>
            <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg h-24 focus:ring-2 focus:ring-black"></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-600 mb-1">Priority</label>
            <div className="flex gap-2">
              {(['low', 'medium', 'high'] as const).map(p => (
                <button key={p} type="button" onClick={() => setPriority(p)} className={`px-3 py-1 text-sm rounded-full capitalize transition-all ${priority === p ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-medium bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">Cancel</button>
            <button type="submit" className="px-4 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">Save Task</button>
          </div>
        </form>
      </div>
    </div>
  );
}

// --- Main Page ---

export default function Dashboard() {
  const router = useRouter();
  const handleLogout = () => router.push("/");

  // State to manage changing tabs
  const [activeTab, setActiveTab] = useState("dashboard");

  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [modalTargetStatus, setModalTargetStatus] = useState<Task['status']>('todo');

  const handleOpenModal = (task: Task | null = null, status: Task['status'] = 'todo') => {
    setTaskToEdit(task);
    if (!task) {
      setModalTargetStatus(status);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTaskToEdit(null);
  };

  const handleSaveTask = (taskData: Omit<Task, 'id' | 'status'> & { id?: number }) => {
    if (taskData.id) {
      setTasks(tasks.map(t => t.id === taskData.id ? { ...t, ...taskData } : t));
    } else {
      const newTask: Task = {
        ...taskData,
        id: Date.now(),
        status: modalTargetStatus,
      };
      setTasks([newTask, ...tasks]);
    }
    handleCloseModal();
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(t => t.id !== taskId));
  };

  const handleMoveTask = (task: Task, status: Task['status']) => {
    setTasks(tasks.map(t => t.id === task.id ? { ...t, status: status } : t));
  };

  const backlogTasks = tasks.filter(t => t.status === 'backlog');
  const todoTasks = tasks.filter(t => t.status === 'todo');
  const inProgressTasks = tasks.filter(t => t.status === 'inprogress');
  const doneTasks = tasks.filter(t => t.status === 'done');

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-black">
      <Header title="myTasks" username="Tester" onLogout={handleLogout} />
      
      <div className="flex flex-1">
        {/* Pass active tab and setter to Sidebar */}
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        
        <main className="flex-1 p-6 lg:p-8">
          {activeTab === 'dashboard' ? (
            <div className="max-w-screen-xl mx-auto animate-in fade-in duration-300">
              {/* Header Section */}
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-slate-900">myTasks</h1>
                  <p className="text-gray-500 text-sm mt-1">Welcome to my mock to-do list.</p>
                </div>
                <button onClick={() => handleOpenModal(null, 'todo')} className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                  <Plus size={18} /> Add Task
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <StatCard 
                  label="Total Tasks" 
                  value={tasks.length} 
                  icon={<ListTodo className="text-slate-600" size={20} />} 
                  iconBg="bg-slate-100"
                  textColor="text-black"
                />
                <StatCard 
                  label="In Progress" 
                  value={inProgressTasks.length} 
                  icon={<Clock className="text-blue-600" size={20} />} 
                  iconBg="bg-blue-50"
                  textColor="text-blue-600"
                />
                <StatCard 
                  label="Completed" 
                  value={doneTasks.length} 
                  icon={<CheckCircle2 className="text-green-600" size={20} />} 
                  iconBg="bg-green-50"
                  textColor="text-green-600"
                />
              </div>

              {/* Kanban Board */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <KanbanColumn title="To Do" tasks={todoTasks} status="todo" onAddTask={handleOpenModal} onMoveTask={handleMoveTask} onEditTask={handleOpenModal} onDeleteTask={handleDeleteTask} countColor="bg-gray-200 text-gray-600" borderColor="border-t-gray-300 border-t-2" />
                <KanbanColumn title="In Progress" tasks={inProgressTasks} status="inprogress" onAddTask={handleOpenModal} onMoveTask={handleMoveTask} onEditTask={handleOpenModal} onDeleteTask={handleDeleteTask} countColor="bg-blue-100 text-blue-600" borderColor="border-t-blue-500 border-t-2" />
                <KanbanColumn title="Done" tasks={doneTasks} status="done" onAddTask={handleOpenModal} onMoveTask={handleMoveTask} onEditTask={handleOpenModal} onDeleteTask={handleDeleteTask} countColor="bg-green-100 text-green-600" borderColor="border-t-green-500 border-t-2" />
              </div>
            </div>
          ) : (
            // RENDER SETTINGS VIEW IF TAB IS NOT DASHBOARD
            <SettingsView />
          )}
        </main>
      </div>
      <TaskModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveTask} taskToEdit={taskToEdit} />
    </div>
  );
}