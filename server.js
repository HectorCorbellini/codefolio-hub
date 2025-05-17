import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint to open a local project directory or execute specific applications
app.post('/api/open', (req, res) => {
  const { path: projectPath } = req.body;
  if (!projectPath) {
    return res.status(400).json({ error: 'No path provided' });
  }

  // Check if this is the ecosystem simulation project
  if (projectPath.includes('ecosystem-simulation')) {
    console.log('Launching ecosystem simulation JAR file...');
    const jarPath = '/root/EMPREND/Bolt-Portfolio/portfo/ecosystem-simulation.jar';
    
    const java = spawn('java', ['-jar', jarPath]);
    
    java.stdout.on('data', (data) => {
      console.log(`Ecosystem simulation stdout: ${data}`);
    });
    
    java.stderr.on('data', (data) => {
      console.error(`Ecosystem simulation stderr: ${data}`);
    });
    
    java.on('error', (err) => {
      console.error('Error executing JAR file:', err);
      res.status(500).json({ error: 'Failed to execute JAR file' });
    });
    
    java.on('close', (code) => {
      if (code !== 0) {
        console.error(`Java process exited with code ${code}`);
        return res.status(500).json({ error: 'JAR execution failed' });
      }
      console.log('JAR execution completed successfully');
    });
    
    // Respond immediately as the JAR will run in the background
    return res.json({ success: true, message: 'Ecosystem simulation launched' });
  }
  
  // Check if this is the Code Processor project
  if (projectPath.includes('code-processor')) {
    console.log('Launching Code Processor executable...');
    const executablePath = '/root/EMPREND/Bolt-Portfolio/portfo/CodeProcessor';
    
    // Make sure the file is executable
    spawn('chmod', ['+x', executablePath]);
    
    const process = spawn(executablePath, []);
    
    process.stdout.on('data', (data) => {
      console.log(`Code Processor stdout: ${data}`);
    });
    
    process.stderr.on('data', (data) => {
      console.error(`Code Processor stderr: ${data}`);
    });
    
    process.on('error', (err) => {
      console.error('Error executing Code Processor:', err);
      res.status(500).json({ error: 'Failed to execute Code Processor' });
    });
    
    process.on('close', (code) => {
      if (code !== 0) {
        console.error(`Code Processor exited with code ${code}`);
        return res.status(500).json({ error: 'Code Processor execution failed' });
      }
      console.log('Code Processor execution completed successfully');
    });
    
    // Respond immediately as the executable will run in the background
    return res.json({ success: true, message: 'Code Processor launched' });
  }

  // Check if this is the Caesar Cipher project
  if (projectPath.includes('caesar-cipher')) {
    console.log('Launching Caesar Cipher Swing interface...');
    const jarPath = '/root/EMPREND/Bolt-Portfolio/portfo/CaesarCipher.jar';

    // Start Java application with Swing interface
    const java = spawn('java', ['-Dui.mode=gui', '-jar', jarPath]);

    java.stdout.on('data', (data) => {
      console.log(`Caesar Cipher stdout: ${data}`);
    });

    java.stderr.on('data', (data) => {
      console.error(`Caesar Cipher stderr: ${data}`);
    });

    java.on('error', (err) => {
      console.error('Error executing Caesar Cipher:', err);
      res.status(500).json({ error: 'Failed to execute Caesar Cipher' });
    });

    java.on('close', (code) => {
      if (code !== 0) {
        console.error(`Java process exited with code ${code}`);
        return res.status(500).json({ error: 'JAR execution failed' });
      }
      console.log('Caesar Cipher execution completed successfully');
    });

    // Respond immediately as the JAR will run in the background
    return res.json({ success: true, message: 'Caesar Cipher Swing interface launched' });
  }

  // For other projects, open the directory as before
  const opener = spawn('xdg-open', [projectPath]);
  opener.on('error', (err) => {
    console.error('Error opening path:', err);
    res.status(500).json({ error: 'Failed to open path' });
  });
  opener.on('close', (code) => {
    if (code !== 0) {
      console.error(`xdg-open exited with code ${code}`);
      return res.status(500).json({ error: 'Failed to open path' });
    }
    res.json({ success: true });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend listening at http://localhost:${PORT}`));
