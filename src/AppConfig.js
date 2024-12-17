import { StringHelper } from "@bryntum/gantt";

export const ganttConfig = {
  dependencyIdField: "sequenceNumber",
  rowHeight: 45,
  tickSize: 45,
  barMargin: 8,
  project: {
    autoSetConstraints: true, // automatically introduce `startnoearlier` constraint if tasks do not use constraints, dependencies, or manuallyScheduled
    autoLoad: true,
    loadUrl: "data/data.json",
  },

  columns: [{ type: "name", width: 250 }],

  // Custom task content, display task name on child tasks
  taskRenderer({ taskRecord }) {
    if (taskRecord.isLeaf && !taskRecord.isMilestone) {
      return StringHelper.encodeHtml(taskRecord.name);
    }
  },
};
